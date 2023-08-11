import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>Zar oyunu nasıl oynanır</h2>
      <div className="text">
        <p>Herhangi bir sayı seçin</p>
        <p>Zar resmine tıklayın</p>
        <p>
        Zara tıkladıktan sonra seçilen sayı zar sayısına eşitse zarla aynı puanı alırsınız{" "}
        </p>
        <p>Yanlış tahmin edersen 2 puan silinecek </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
