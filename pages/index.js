import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
} from "@coreui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CContainer>
        <CRow>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-email">Email</CLabel>
                <CInput
                  type="email"
                  id="nf-email"
                  name="nf-email"
                  placeholder="Enter Email.."
                  autoComplete="email"
                />
                <CFormText className="help-block">
                  Please enter your email
                </CFormText>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Password</CLabel>
                <CInput
                  type="password"
                  id="nf-password"
                  name="nf-password"
                  placeholder="Enter Password.."
                  autoComplete="current-password"
                />
                <CFormText className="help-block">
                  Please enter your password
                </CFormText>
              </CFormGroup>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
