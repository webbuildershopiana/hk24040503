import Card from '@/components/ui/cards/card';

import Seo from '@/components/seo/seo';

import DashboardLayout from '@/layouts/_dashboard';

// import MyReports from '@/components/reports/report-view';

import { useModalAction } from '@/components/ui/modal/modal.context';

import { useSettings } from '@/framework/settings';

import { useLogin } from '@/framework/user';

import { LoginUserInput } from '@/types';

import { useTranslation } from 'next-i18next';

import { useRouter } from 'next/router';

import * as yup from 'yup';

import { Form } from '@/components/ui/forms/form';

import Button from '@/components/ui/button';

import Link from 'next/link';

import Alert from '@/components/ui/alert';

import GeneralLayout from '@/components/layouts/_general';

import { useEffect } from 'react';

import AuthorizedMenu from '@/components/layouts/menu/authorized-menu';

import { authorizationAtom } from '@/store/authorization-atom';

import { useAtom } from 'jotai';

//[[UI_IMPORT]]
const loginFormSchema = yup.object().shape({
  username: yup.string().required('error-mobilenumber-required').min(10, 'Must be exactly 10 digits').max(10, 'Must be exactly 10 digits'),
  password: yup.string().required('error-password-required').min(4, 'Must be exactly 4 digits').max(4, 'Must be exactly 4 digits'),
  email: yup.string().email('error-email-format').optional(),
});

const LoginPage = () => {
  useEffect(() => {
    // console.log("test use r")
    const commonScript = document.createElement("script");
    commonScript.src = "/assets/script.js";
    document.head.appendChild(commonScript);
    return () => {
      document.head.removeChild(commonScript);
    };
  }, []);
   const [isAuthorize] = useAtom(authorizationAtom);
//[[UI_HOOK]]
  const { t } = useTranslation('common');
  const router = useRouter();
  const { openModal } = useModalAction();
  const isCheckout = router.pathname.includes('checkout');
  const { mutate: login, isLoading, serverError, setServerError } = useLogin();

  // const {
  //   settings: {
  //     allowGuestUser
  //   },
  // } = useSettings();

  function onSubmit({ username, password }: LoginUserInput) {
    login({
      username,
      password,
    });
  }
  return (
    <>
    <Alert
        variant="error"
        message={serverError && t(serverError)}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      />
      
 <section className="py-5" id="idam6h">
  <div className="container p-4" id="i2wiom">
   <div id="i1wtet">
    Account Login
   </div>
   <div className="mb-4" id="i9hs5f">
    Hey, Enter your details to get sign in
    <br/>
    to your account.
   </div>
   <Form<LoginUserInput>
        onSubmit={onSubmit}
        validationSchema={loginFormSchema} id="igdjz6">
    {({ register, formState: { errors } }) => (
                <>
                <div className="mb-3" id="id47dg"><input aria-describedby="emailHelp" className="form-control" id="exampleInputEmail1" name="username" placeholder="Phone No." required="" type="number" {...register('username')}/></div>
<div className="mb-3" id="ivcljq"><input className="form-control" id="exampleInputPassword1" name="password" placeholder="Passcode" required="" type="password" {...register('password')}/><div className="my-3" id="ivdbg3">Having trouble in sign in?</div></div>
<button className="btn btn-primary" id="ixdtva" type="submit">Sign in</button>
                </>
                )}
   </Form>
   <div className="my-3" id="i7ratv">
    Don't have an account?
   </div>
   <div action-type="register" button-type="auth" id="ibvous">
    <button onClick={() => openModal('REGISTER')} id="iamfy2" type="submit">
     Register Now
    </button>
   </div>
  </div>
 </section>




    </>
  );
};
LoginPage.getLayout = function getLayout(page: React.ReactElement){
  return (
    <GeneralLayout layout='' >
      {page}
    </GeneralLayout>
  );
};
export default LoginPage;

     
