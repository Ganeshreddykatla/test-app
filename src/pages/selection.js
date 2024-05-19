import Button from "@/Components/comman/Button";
import FormSection from "@/Components/comman/FormSection";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
const Selection = () => {
  let router = useRouter();
  return (
    <FormSection
      renderElement={
        <div>
          <Formik
            initialValues={{ woType: "Submit Wo" }}
            onSubmit={(values, { setSubmitting }) => {
                router.push("/course-list");
            }}
          >
            {(values, setFieldValue) => (
              <Form>
                <div className="mb-4">
                  <div className="flex items-center gap-x-3">
                    <Field type="radio" name="woType" value="View/Search Wo" />
                    <label className="cursor-pointer" htmlFor="view">
                      View/Search Course List
                    </label>
                  </div>
                </div>
                <div className="pb-4 sm:pb-8">
                  <Button buttonTitle="Submit" type="Submit" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      }
    />
  );
};

export default Selection;
