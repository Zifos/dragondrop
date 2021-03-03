import { Card, Collapse, Input, Select } from "antd";
import Title from "antd/lib/typography/Title";
import Head from "next/head";

const INPUTS_ELEM = {
  input: Input,
  select: Select,
};

const MOCK_SECTION = [
  {
    component_id: "1",
    title: "Form",
    inputs: [
      {
        type: "input",
        props: {
          label: "Name",
          placeholder: "Insert your name",
        },
      },
      {
        type: "select",
        props: {
          label: "Framework",
          placeholder: "Select your framework",
          options: [
            {
              label: "Vue",
              value: 0,
            },
            {
              label: "React",
              value: 1,
            },
            {
              label: "Svelte",
              value: 2,
            },
            {
              label: "Angular... en serio?",
              value: 3,
            },
          ],
        },
      },
    ],
  },
];

const SubElements = ({ props, type }) => {
  const Comp = INPUTS_ELEM[type];
  return (
    <>
      <Comp {...props} />
    </>
  );
};

const Elements = ({ title, inputs }) => (
  <>
    <Title level={4}>{title}</Title>
    <Collapse defaultActiveKey={["0"]}>
      {inputs.map((input, i) => (
        <Collapse.Panel header={`Edit the ${input.props.label}`} key={i}>
          <SubElements {...input} />
        </Collapse.Panel>
      ))}
    </Collapse>
  </>
);

export default function Sections(): JSX.Element {
  return (
    <>
      <Head>
        <title>Sections - Dragondrop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card title="Section 1">
        {MOCK_SECTION.map((elements) => (
          <Elements {...elements} key={elements.component_id} />
        ))}
      </Card>
    </>
  );
}
