import { Container, Text } from "./styles";

function Footer({ total }) {
  return (
    <Container>
      <Text>Total</Text>
      <Text isBold >{total}</Text>
    </Container>
  );
}

export default Footer;
