import { Container, Text } from "./styles";

function Footer({ total }) {
  return (
    <Container>
      <Text>Total</Text>
      <Text isBold>{total.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
    </Container>
  );
}

export default Footer;
