import React, {useEffect} from 'react';
import './TermsAndConditions.css'; // Import CSS file for styling
import axios from 'axios';

function TermsAndConditions() {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions for Data Protection and Third-Party Transmission</h1>
      <div className="terms-content">
        <p className="terms-text">
          <strong>Last update: 04/30/2024</strong><br />
          These Terms and Conditions govern your use and consent to the sharing of your personal data with third parties as established by the General Data Protection Regulation (GDPR).
        </p>
        <ol className="terms-list">
          <li>
            <strong>Consent:</strong> By accepting these Terms and Conditions, you expressly consent to the sharing of your personal data with third parties as described in this policy.
          </li>
          <li>
            <strong>Shared Personal Data:</strong> The personal data that may be shared includes, but is not limited to:
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Postal address</li>
              <li>Phone number</li>
              <li>Other identifiable information</li>
            </ul>
          </li>
          <li>
            <strong>Purpose of Data Sharing:</strong> Your personal data may be shared with third parties for the purpose of:
            <ul>
              <li>Providing services requested by you</li>
              <li>Supplying products or information relevant to your interests</li>
              <li>Conducting data analysis and statistics</li>
              <li>Compliance with legal or regulatory obligations</li>
            </ul>
          </li>
          <li>
            <strong>Responsibility for Data Protection:</strong> We commit to taking reasonable measures to protect your personal data against unauthorized access, misuse, or disclosure.
          </li>
          <li>
            <strong>Explicit Consent:</strong> Your consent to data sharing with third parties is explicit and may be revoked at any time by written notification to info@bravanfc.com.
          </li>
          <li>
            <strong>Data Retention:</strong> Your personal data will be retained only for the time necessary to fulfill the purposes for which it was collected or as required by law.
          </li>
          <li>
            <strong>Data Subject Rights:</strong> As the data subject, you have the right to access, correct, update, or request the deletion of your personal data. To exercise these rights, please contact us using the details provided below.
          </li>
          <li>
            <strong>Changes to Terms and Conditions:</strong> We reserve the right to change these Terms and Conditions at any time. Any changes will take effect immediately upon their publication on this website.
          </li>
          <li>
            <strong>Contact:</strong> If you have any questions or concerns about these Terms and Conditions or our data protection practices, please contact us at the following address: [Insert contact information]
          </li>
          <li>
            <strong>Acceptance of Terms and Conditions:</strong> By clicking "Accept" or continuing to use our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
          </li>
        </ol>
      </div>
      <h1 className="terms-title">Termos e Condições para Proteção de Dados e Transmissão a Terceiros</h1>
      <div className="terms-content">
        <div>
          <h2>Português</h2>
          <p className="terms-text">
            <strong>Última atualização: 30/04/2024</strong><br />
            Estes Termos e Condições regem a sua utilização e consentimento para a partilha dos seus dados pessoais com terceiros conforme estabelecido pelo Regulamento Geral de Proteção de Dados (RGPD).
          </p>
          <ol className="terms-list">
            <li>
              <strong>Consentimento:</strong> Ao aceitar estes Termos e Condições, você consente expressamente na partilha dos seus dados pessoais com terceiros conforme descrito nesta política.
            </li>
            <li>
              <strong>Dados Pessoais Compartilhados:</strong> Os dados pessoais que podem ser compartilhados incluem, mas não se limitam a:
              <ul>
                <li>Nome</li>
                <li>Endereço de e-mail</li>
                <li>Endereço postal</li>
                <li>Número de telefone</li>
                <li>Outras informações identificáveis</li>
              </ul>
            </li>
            <li>
              <strong>Finalidade da Partilha de Dados:</strong> Os seus dados pessoais podem ser compartilhados com terceiros com a finalidade de:
              <ul>
                <li>Prestação de serviços solicitados por você</li>
                <li>Fornecimento de produtos ou informações relevantes ao seu interesse</li>
                <li>Realização de análises de dados e estatísticas</li>
                <li>Cumprimento de obrigações legais ou regulatórias</li>
              </ul>
            </li>
            <li>
              <strong>Responsabilidade pela Proteção de Dados:</strong> Comprometemo-nos a tomar medidas razoáveis para proteger os seus dados pessoais contra acesso não autorizado, uso indevido ou divulgação.
            </li>
            <li>
              <strong>Consentimento Explícito:</strong> O seu consentimento para a partilha de dados com terceiros é explícito e pode ser revogado a qualquer momento, mediante notificação por escrito para info@bravanfc.com.
            </li>
            <li>
              <strong>Retenção de Dados:</strong> Os seus dados pessoais serão retidos apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados ou conforme exigido por lei.
            </li>
            <li>
              <strong>Direitos do Titular dos Dados:</strong> Como titular dos dados, você tem o direito de aceder, corrigir, atualizar ou solicitar a exclusão dos seus dados pessoais. Para exercer esses direitos, entre em contato connosco através dos detalhes fornecidos abaixo.
            </li>
            <li>
              <strong>Alterações nos Termos e Condições:</strong> Reservamo-nos o direito de alterar estes Termos e Condições a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a sua publicação neste site.
            </li>
            <li>
              <strong>Contato:</strong> Se você tiver alguma dúvida ou preocupação sobre estes Termos e Condições ou sobre a nossa prática de proteção de dados, entre em contato connosco pelo seguinte endereço: [Inserir contato]
            </li>
            <li>
              <strong>Aceitação dos Termos e Condições:</strong> Ao clicar em "Aceitar" ou continuar a utilizar os nossos serviços, você reconhece que leu, compreendeu e concordou com estes Termos e Condições.
            </li>
          </ol>
        </div>
    </div>
    </div>
  );
}

export default TermsAndConditions;
