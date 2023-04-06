import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const handleSubmit = async (value) => {
    console.log(value);
  };
  return (
    <div
      className="h-screen w-screen"
      style={{
        background:
          "linear-gradient(180deg, rgba(40,85,152,1) 0%, rgba(23,35,61,1) 35%, rgba(22,32,44,1) 48%)",
      }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
            خوش آمدید
          </h1>

          <p className="mt-2 text-violet-100 font-normal">
            لطفا وارد حساب کاربری خود شوید
          </p>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <div className="relative">
                <Field
                  name="email"
                  type="email"
                  className="w-full rounded-lg placeholder:text-white bg-gray-600 opacity-80 text-white p-4 pr-6 mt-4 text-sm shadow-sm outline-none"
                  placeholder="نام کاربری"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Field
                  name="password"
                  type="password"
                  className="w-full rounded-lg placeholder:text-white bg-gray-600 opacity-80 text-white p-4 pr-6 mt-4 text-sm shadow-sm outline-none"
                  placeholder="رمز عبور"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="block rounded-full bg-blue-600 w-full mt-6 px-5 py-3 text-lg font-semibold text-white"
              >
                ورود
              </button>
            </div>
            <Link
              to="/"
              className="flex text-lg font-light text-slate-100 item-center justify-center underline"
            >
              فراموشی رمز عبور
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
