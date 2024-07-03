import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const KafkaEventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="eventType" source="eventType" />
        <div />
        <DateTimeInput label="receivedAt" source="receivedAt" />
      </SimpleForm>
    </Edit>
  );
};
