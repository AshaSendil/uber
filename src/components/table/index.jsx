import { Table } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";
import { CLOSE_LOGO } from "../../assets/Images";

const Tables = ({
  loading,
  columns,
  data,
  onChange,
  pagination,
  scroll,
  size,
  isBordered,
  Title,
  show,
  expenseShowHandler,

}) => {
  return (
    <Table
      // onRow={expenseShowHandler()}

      loading={loading}
      columns={columns}
      rowSelection={true}
      // onColumns={show}
      dataSource={data}
      onChange={(e) => onChange(e)}
      pagination={pagination}
      scroll={scroll}
      size={size}
      bordered={isBordered}
      title={Title && <Title />}
      onRow={() => {
        return {
          onClick: () => {

            expenseShowHandler()
          }
        }

      }}





    />
  );
};

export default Tables;

Tables.propTypes = {
  loading: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  onChange: PropTypes.func,
  pagination: PropTypes.object,
  scroll: PropTypes.object,
  size: PropTypes.string,
  isBordered: PropTypes.bool,
  Title: PropTypes.element,
};

Tables.defaultProps = {
  loading: false,
  columns: [],
  data: [],
  onChange: null,
  pagination: {
    pageSize: 10,
    showSizeChanger: true,
    hideOnSinglePage: true,
    position: "bottomRight",
  },
  scroll: {
    y: 320,
  },
  size: "large",
  isBordered: false,
  Title: null,
};
