import React from "react";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
const AddEvent = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add event</h4>
        <div className="form-center">
          <FormRow type="text" name="Tên dự án" />
          <FormRow type="text" name="Mô tả dự án" />
          <FormRow type="text" name="Yêu cầu" />
          <FormRow type="text" name="Thời gian bắt đầu" />
          <FormRow type="text" name="Thời gian kết thúc" />
          <FormRow type="text" name="Địa chỉ" />
          <FormRow type="text" name="Ngày bắt đầu" />
          <FormRow type="text" name="Ngày kết thúc" />
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Chọn ảnh (max 10 MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="image"
              className="form-input"
              accept="image/*"
            />
          </div>
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddEvent;
