"use client";

import { error } from "console";
import Authcontainer from "../conatiners/AuthContainer";
import Heading from "../general/Heading";
import Input from "../general/Input";

const RegisterClient = () => {
  return (
    <Authcontainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md  ">
        <Heading text="Register" center />
        <Input
          placeholder="Name"
          type="text"
          id="name"
          register={register}
          errors={error}
          required
        />
        <Input
          placeholder="Email"
          type="text"
          id="name"
          register={register}
          errors={error}
          required
        />
        <Input
          placeholder="Password"
          type="text"
          id="name"
          register={register}
          errors={error}
          required
        />
      </div>
    </Authcontainer>
  );
};

export default RegisterClient;
