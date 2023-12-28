import React from "react";
import { Button, Input, Box, Page, useSnackbar } from "zmp-ui";
import { useRecoilState } from "recoil";
import { userState } from "../state";

const FormPage = () => {
  const [user, setUser] = useRecoilState(userState);
  const [form, setForm] = React.useState({ ...user });
  const snackbar = useSnackbar();

  const handleChangeInput = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    snackbar.openSnackbar({ duration: 3000, text: "saved", type: "success" });
    setUser(form);
  };

  return (
    <Page className="page">
      <div className="section-container">
        <Box>
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder="Zalo"
            value={form?.name}
            onChange={(e) => handleChangeInput("name", e.target.value)}
          />
          <Input
            label="Avatar"
            type="text"
            placeholder="zalo@zalo.me"
            value={form?.avatar}
            onChange={(e) => handleChangeInput("avatar", e.target.value)}
          />
          <Box mt={4}>
            <Button fullWidth variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </Page>
  );
};

export default FormPage;
