"use client";

import Heading from "../general/Heading";
import Input from "../general/Input";

const CreateForm = () => {
  return (
    <div>
      <Heading text="CreateForm" />
      <Input
        placeholder="Name"
        type="text"
        id="name"
        register={register}
        errors={errors}
        required
      />
    </div>
  );
};

export default CreateForm;
