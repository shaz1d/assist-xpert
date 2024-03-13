import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface NewLeadProps {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const NewLead = ({
  name,
  email,
  phone,
  service,
  message,
}: NewLeadProps) => {
  return (
    <Html>
      <Head />
      <Preview>You have got a new Lead on {service}</Preview>

      <Body>
        <Container>
          <Heading>
            You have got a new lead on <strong>{service}</strong>
          </Heading>
          <Text>
            <p>
              Name: <strong>{name}</strong>
            </p>
            <p>
              Email:{" "}
              <strong>
                <a href={`mailto:${email}`}>{email}</a>
              </strong>
            </p>
            <p>
              Phone: <strong>{phone}</strong>
            </p>
            <p>
              Service: <strong>{service}</strong>
            </p>
            <p>
              Message: <strong>{message}</strong>
            </p>
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

NewLead.PreviewProps = {
  name: "shazdi",
  email: "user@gmail.com",
  phone: "01234567890",
  service: "Web Development",
  message: "Hello World",
} as NewLeadProps;

export default NewLead;
