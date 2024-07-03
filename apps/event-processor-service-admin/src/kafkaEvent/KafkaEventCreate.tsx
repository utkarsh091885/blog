import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const KafkaEventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="eventType" source="eventType" />
        <div />
        <DateTimeInput label="receivedAt" source="receivedAt" />
      </SimpleForm>
    </Create>
  );
};
