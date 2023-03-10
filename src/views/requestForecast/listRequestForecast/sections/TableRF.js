import { Row, Col, FormGroup, CustomInput } from "reactstrap";
import Card from "reactstrap/lib/Card";
import ReactPaginate from "react-paginate";
import { TabContent, TabPane, Table } from "reactstrap";
import React, { useState, useEffect } from "react";
import ActionTableRF from "../components/ActionTableRF";
import styles from "../../../../../styles/Table.module.css";
import WrapperCustomScrollbar from "components/custom/WrapperCustomScrollbar";
import CustomScrollbar from "components/custom/CustomScrollbar";

const TableRF = () => {
  const [currentPos, setCurrentPos] = useState(0);
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <div className="overflow-hidden" style={{ height: 380, width: "100%" }}>
        <div style={{ height: 400, width: "100%" }}>
          <WrapperCustomScrollbar
            onCurrentPosition={(value) => {
              setCurrentPos(value);
            }}
            thumbSize={30}
          >
            <TabContent
              style={{ width: 2200 }}
              className="py-50 mt-2"
              activeTab={"1"}
            >
              <TabPane style={{ width: 2200 }} tabId="1">
                <Card
                  className="pt-0"
                  style={{ border: "1px solid #d8d6de", width: 2200 }}
                >
                  <Table
                    style={{ width: 2200 }}
                    className="table border-bottom"
                  >
                    <thead>
                      <tr>
                        <th className="text-center px-2 align-middle py-2">
                          <FormGroup className="mb-0">
                            <CustomInput
                              inline
                              type="checkbox"
                              id="exampleCustomCheckbox2"
                              label=""
                            />
                          </FormGroup>
                        </th>
                        <th className="text-center px-2 align-middle py-2">
                          ACTION
                        </th>
                        <th className="text-center px-2 align-middle py-2">
                          NO. REQUEST
                        </th>
                        <th className="text-center align-middle py-2">
                          GENERIC NAME
                        </th>
                        <th className="text-center align-middle py-2">
                          ITEM CODE
                        </th>
                        <th className="text-center align-middle py-2">
                          ITEM DESCRIPTION
                        </th>
                        <th className="text-center align-middle py-2">
                          MANUFACTURE
                        </th>
                        <th className="text-center align-middle py-2">
                          ORG CODE
                        </th>
                        <th className="text-center align-middle py-2">UOM</th>
                        <th className="text-center align-middle py-2">
                          PERIODE START
                        </th>
                        <th className="text-center align-middle py-2">
                          PERIODE END
                        </th>
                        <th className="text-center align-middle">
                          <span className="">REVISION REASON</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <FormGroup className="mb-0">
                            <CustomInput
                              inline
                              type="checkbox"
                              id="exampleCustomCheckbox2"
                              label=""
                            />
                          </FormGroup>
                        </td>
                        <td className="text-center px-2 align-middle position-relative">
                          <ActionTableRF />
                        </td>
                        <td style={{ textAlign: "center" }}>
                          1234567890123456
                        </td>
                        <td style={{ textAlign: "center" }}>
                          Lorem Ipsum Dolor Sit Amet
                        </td>
                        <td style={{ textAlign: "center" }}>
                          1234567890123456
                        </td>
                        <td
                          className={styles.text}
                          style={{ textAlign: "center" }}
                        >
                          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                          elit.
                        </td>
                        <td style={{ textAlign: "center" }}>
                          PT. Lorem Ipsum Dolor
                        </td>
                        <td style={{ textAlign: "center" }}>
                          1234567890123456
                        </td>
                        <td style={{ textAlign: "center" }}>Botol</td>
                        <td style={{ textAlign: "center" }}>03/31/2022</td>
                        <td style={{ textAlign: "center" }}>03/31/2022</td>
                        <td style={{ textAlign: "center" }}>
                          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                          elit.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </TabPane>
            </TabContent>
          </WrapperCustomScrollbar>
        </div>
      </div>

      <Row className="mb-2 mt-3 justify-content-between align-items-center">
        <Col className="mb-2 mb-md-0" sm="12" md="5">
          <p
            className="mb-0 text-center text-md-left"
            style={{ color: "#b9b9c3" }}
          >
            Showing 1 to 10 of 29 entries
          </p>
        </Col>
        <Col sm="12" md="5">
          <ReactPaginate
            pageCount="5"
            nextLabel={""}
            breakLabel={"..."}
            activeClassName={"active"}
            pageClassName={"page-item"}
            previousLabel={""}
            nextLinkClassName={"page-link"}
            nextClassName={"page-item next-item"}
            previousClassName={"page-item prev-item"}
            previousLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName={
              "pagination react-paginate m-0 justify-content-center justify-content-lg-end"
            }
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default React.memo(TableRF);
