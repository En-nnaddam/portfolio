import {
  Input,
  TextArea,
  Button,
  Link,
  Form,
  TextField,
  Label,
  FieldError,
} from "@heroui/react";
import { GithubIcon, LinkedinIcon, MailIcon } from "../icons";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's work together
          </h2>
          <p className="text-default-500 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </div>

        <div className="max-w-xl mx-auto space-y-8">
          <Form className="space-y-4">
            <TextField isRequired>
              <Label>Name</Label>
              <Input placeholder="Your name" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField isRequired>
              <Label>Message</Label>
              <TextArea placeholder="Tell me about your project..." />
              <FieldError />
            </TextField>

            <Button
              variant="primary"
              size="lg"
              type="submit"
              className="w-full"
            >
              Send Message
            </Button>
          </Form>

          <div className="flex gap-8 justify-center">
            <Link
              href="mailto:abdoennaddam@gmail.com"
              className="space-x-1 text-lg"
            >
              <MailIcon /> <span>Email</span>
            </Link>

            <Link
              href="https://github.com/En-nnaddam"
              target="_blank"
              className="space-x-1 text-lg"
            >
              <GithubIcon /> <span>Github</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abd-essamad-ennaddam-b8a6251b0/"
              target="_blank"
              className="space-x-1 text-lg"
            >
              <LinkedinIcon />
              <span>Linkedin</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
