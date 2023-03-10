import { helperFilterListCA } from "helpers/contractApproval";
import { debounce } from "helpers/utils";
import React, { Fragment, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import AsyncSelect from "react-select/async";

const OptionRequestNumber = ({ onChange, key, id }) => {
  const token = useSelector((state) => state.auth.token);
  const stateFilter = useSelector((state) => state.contractApproval.filter);
  const listCA = useSelector(
    (state) => state.contractApproval.response?.data ?? []
  );
  const value = {
    label: stateFilter?.RequestNumber
      ? stateFilter?.RequestNumber?.length > 0
        ? stateFilter?.RequestNumber
        : "Select..."
      : "Select...",
    value: stateFilter?.RequestNumber ?? "",
  };

  const loadOptions = async (data) => {
    var listOptions = [];

    (data ?? []).map((item) => {
      var isExist = listOptions.filter((el) => el.value == item.requestNumber);
      if (isExist.length == 0) {
        var itemOption = {
          value: item.requestNumber,
          label: item.requestNumber,
        };
        listOptions = [...listOptions, itemOption];
      }
    });

    return listOptions;
  };

  const loadOptionsDebounced = useCallback(
    debounce(async (inputValue, callback) => {
      if (token && inputValue != "") {
        helperFilterListCA(inputValue, token).then(async (data) => {
          return callback(await loadOptions(data));
        });
      } else {
        return callback(await loadOptions(listCA));
      }
    }, 2000),
    []
  );

  return (
    <Fragment>
      <AsyncSelect
        instanceId={"OptionRequestNumber"}
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

export default OptionRequestNumber;
