// components/todo/TodoInput.jsx
import { useState } from "react";
import { Input, Select, DatePicker, Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { useTodoContext } from "../../context/TodoContext";

const { Option } = Select;

const TodoInput = () => {
  const { addTodo } = useTodoContext();
  const [form] = Form.useForm();
  const [formErrors, setFormErrors] = useState({});
  const [showValidation, setShowValidation] = useState(false);

  const handlePriorityChange = (value) => {
    if (value === "Daily") {
      form.setFieldsValue({
        dueDate: moment(),
      });
    }
    if (showValidation) {
      validateFields();
    }
  };

  const validateFields = () => {
    if (!showValidation) return true;

    const values = form.getFieldsValue();
    const errors = {};

    if (!values.text?.trim()) {
      errors.text = "Task description is required";
    }
    if (!values.priority) {
      errors.priority = "Priority is required";
    }
    if (!values.category) {
      errors.category = "Category is required";
    }
    if (!values.dueDate) {
      errors.dueDate = "Due date is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    setShowValidation(true);
    if (!validateFields()) return;

    try {
      const values = await form.validateFields();
      addTodo(
        values.text,
        values.priority,
        values.category,
        values.dueDate.toISOString()
      );

      form.resetFields();
      setFormErrors({});
      setShowValidation(false);
    } catch (info) {
      console.log("Validate Failed:", info);
    }
  };

  const disabledDate = (current) => {
    const priority = form.getFieldValue("priority");

    if (priority === "Daily") {
      return !moment(current).isSame(moment(), "day");
    }

    if (priority === "Weekly") {
      return !moment(current).isBetween(
        moment().startOf("week"),
        moment().endOf("week"),
        "day",
        "[]"
      );
    }

    if (priority === "Monthly") {
      return !moment(current).isBetween(
        moment().startOf("month"),
        moment().endOf("month"),
        "day",
        "[]"
      );
    }

    return current && current < moment().startOf("day");
  };

  return (
    <Form
      form={form}
      layout="inline"
      style={{
        marginBottom: "24px",
        gap: "8px",
      }}
    >
      <Form.Item
        name="text"
        style={{ flex: 1, margin: 0 }}
        validateStatus={showValidation && formErrors.text ? "error" : ""}
        help={showValidation && formErrors.text}
      >
        <Input placeholder="Add new task..." />
      </Form.Item>

      <Form.Item
        name="priority"
        style={{ margin: 0, width: "120px" }}
        validateStatus={showValidation && formErrors.priority ? "error" : ""}
        help={showValidation && formErrors.priority}
      >
        <Select placeholder="Priority" onChange={handlePriorityChange}>
          <Option value="Daily">Daily</Option>
          <Option value="Weekly">Weekly</Option>
          <Option value="Monthly">Monthly</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="category"
        style={{ margin: 0, width: "120px" }}
        validateStatus={showValidation && formErrors.category ? "error" : ""}
        help={showValidation && formErrors.category}
      >
        <Select placeholder="Category">
          <Option value="Personal">Personal</Option>
          <Option value="Team">Team</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="dueDate"
        style={{ margin: 0, width: "130px" }}
        validateStatus={showValidation && formErrors.dueDate ? "error" : ""}
        help={showValidation && formErrors.dueDate}
      >
        <DatePicker
          placeholder="Due date"
          disabledDate={disabledDate}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item style={{ margin: 0 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleSubmit}>
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoInput;
