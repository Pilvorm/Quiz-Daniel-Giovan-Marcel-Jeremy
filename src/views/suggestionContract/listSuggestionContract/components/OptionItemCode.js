import { helperFilterListSC } from "helpers/suggestionContract";
import { debounce } from "helpers/utils";
import React, { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import AsyncSelect from "react-select/async";

const OptionItemCode = ({ onChange, key, id, listSC }) => {
  const token = useSelector((state) => state.auth.token);
  const stateFilter = useSelector((state) => state.listSC.filter);
  const value = {
    label: stateFilter?.ItemCode
      ? stateFilter?.ItemCode?.length > 0
        ? stateFilter?.ItemCode
        : "Select..."
      : "Select...",
    value: stateFilter?.ItemCode ?? "",
  };

  const loadOptions = async (data) => {
    var listOptions = [];

    (data ?? []).map((item) => {
      var isExist = listOptions.filter((el) => el.value == item.itemCode);
      if (isExist.length == 0) {
        var itemOption = { value: item.itemCode, label: item.itemCode };
        listOptions = [...listOptions, itemOption];
      }
    });

    return listOptions;
  };

  const loadOptionsDebounced = useCallback(
    debounce(async (inputValue, callback) => {
      if (token && inputValue != "") {
        helperFilterListSC(inputValue, token, "itemCode").then(async (data) => {
          return callback(await loadOptions(data));
        });
      } else {
        return callback(await loadOptions(listSC));
      }
    }, 2000),
    []
  );

  return (
    <Fragment>
      <AsyncSelect
        instanceId={"OptionItemCode"}
        loadOptions={loadOptionsDebounced}
        defaultOptions
        isClearable
        onChange={(value) => {
          onChange(value);
        }}
        value={value}
      />
    </Fragment>
  );
};

export default OptionItemCode;
