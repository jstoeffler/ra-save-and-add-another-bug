import { Create, SimpleForm, TextInput, required, SaveButton, Toolbar, useNotify } from "react-admin";
import { useFormContext } from "react-hook-form";

const BatchCreateToolbar = () => {
  const notify = useNotify();
  const { reset } = useFormContext();

  return (
    <Toolbar>
      <SaveButton
        type="button"
        label="Save and Add Another"
        variant="text"
        mutationOptions={{
          onSuccess: () => {
            reset();
            window.scrollTo(0, 0);
            notify("Awesome !", {
              type: "success",
              messageArgs: { smart_count: 1 },
            });
          },
        }}
      />
    </Toolbar>
  );
};


export const CreatePost = () => {
  return (
    <Create redirect={false}>
      <SimpleForm toolbar={<BatchCreateToolbar/>} >
        <TextInput source="title" />
        {/* When adding this, submit with return key doesnt work */}
        {/*<TextInput source="content" />*/}
      </SimpleForm>
    </Create>
  );
};
