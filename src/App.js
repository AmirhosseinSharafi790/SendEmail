import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const sendForm = (e) => {
    // const notify = () => toast("پیام شما با موفقیت ارسال شد!");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2io4k2i",
        "template_ry8ese9",
        e.target,
        "wcXYLhXMRnIu5ySYI"
      )
      .then((result) => {
        if (result.status === 200) {
          toast.success("پیام شما با موفقیت ارسال شد !", {
            position: "top-right",
            autoClose: "2000",
            hideProgressBar: true,
            newestOnTop: false,
            closeOnClick: true,
            rtl: "false",
            theme: "dark"
          } , (error => {
            console.log(error);
          }));
        }
      });
  };
  return (
    <>
      <Container
        fluid
        className="h-screen w-screen flex justify-center items-center bg-sky-200"
      >
        <Row>
          <Col sm="12" md="12">
            <h1 className="text-sky-800">ارسال پیام به مدیریت</h1>
            <form
              onSubmit={sendForm}
              className="my-2"
              encType="multipart/form-data"
            >
              <label for="name" className="w-full my-2">
                نام
              </label>
              <input
                id="name"
                className="w-full bg-sky-200 mb-4 border-b-2 border-r-2 border-sky-500 p-3"
                type="text"
                name="name"
              />{" "}
              <br />
              <label for="user-email" className="w-full my-2">
                ایمیل
              </label>
              <input
                id="user-email"
                className="w-full bg-sky-200 mb-4 border-b-2 border-r-2 border-sky-500 p-3 text-start"
                type="email"
                name="user_email"
              />{" "}
              <br />
              <label for="message" className="w-full my-2">
                پیام
              </label>
              <textarea
                className="w-full bg-sky-200 mb-4 border-b-2 border-r-2 border-sky-500 p-3 text-start"
                name="message"
              />{" "}
              <br />
              <div>
                <input
                  className="bg-sky-800 text-sky-50 hover:bg-sky-700 mt-4 p-3 rounded-md m-auto w-full"
                  type="submit"
                  value="ارسال پیام"
                />
              </div>
              <br />
            </form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}

export default App;
