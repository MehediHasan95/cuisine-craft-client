import { faHandPointRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog = () => {
  const data = [
    {
      question:
        "Tell us the differences between uncontrolled and controlled components.",
      answer: [
        "State management: Uncontrolled components manage their state internally, while controlled components manage their state through props and event handlers.",
        "Initial value: Uncontrolled components read the initial value from the DOM, while controlled components receive the initial value through props.",
        "User input handling: Uncontrolled components update the DOM directly when user input occurs, while controlled components use event handlers to update their state and trigger re-renders.",
        "Flexibility: Controlled components provide more flexibility as the component or its parent can intercept, modify, or validate user input before updating the state.",
      ],
    },
    {
      question: "How to validate React props using PropTypes.",
      answer: [
        "Install prop-types package: If you haven't already, you'll need to install the prop-types package. ",
        "Import PropTypes: In the file where you define your React component, you need to import the PropTypes from the prop-types package.",
        "Define prop types for your component: Inside your component, you can define the prop types using the PropTypes object. ",
        "Use the component with props: When you use your component, you can pass the props as usual. PropTypes will validate the props against the defined types and throw a warning in the browser console if the props don't match the specified types.",
      ],
    },
    {
      question: "Tell us the difference between nodejs and express js.",
      answer: [
        "Node.js is the runtime environment that executes JavaScript code on the server-side, while Express.js is a framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. Express.js simplifies common web development tasks and allows developers to create scalable and modular applications using Node.js.",
      ],
    },
    {
      question: "What is a custom hook, and why will you create a custom hook?",
      answer: [
        "Reusability: If you find yourself using the same logic or state management in multiple components, creating a custom hook allows you to encapsulate that logic in one place and reuse it across different components. This promotes code reusability and helps avoid code duplication.",
        "Abstraction: Custom hooks enable you to abstract complex logic into a reusable function. This can simplify your component code and make it easier to understand and maintain. By abstracting away implementation details, you can focus on the higher-level logic of your components.",
        "Better organization: Custom hooks allow you to extract and organize related logic in a separate function, making your component code more focused and readable. This helps separate concerns and improves the overall structure of your codebase.",
        "Testing: Custom hooks can make testing easier by allowing you to test the logic independently of the component. You can write unit tests specifically for the custom hook to ensure that it functions correctly, which can enhance the reliability and maintainability of your code.",
        "Sharing code between components: If you have multiple components that need to share the same state or behavior, a custom hook can centralize that logic and provide a consistent interface for accessing and manipulating the shared state. This promotes code consistency and reduces redundancy.",
      ],
    },
  ];

  return (
    <div className="px-2 lg:px-72 my-10">
      {data.map((e, index) => (
        <div key={index} className="p-5 rounded-md bg-base-100 mb-5">
          <h1 className="text-2xl font-bold">{e.question}</h1>
          <ul>
            {e.answer.map((e) => (
              <li>
                <FontAwesomeIcon
                  icon={faHandPointRight}
                  className="text-xs me-2"
                />
                {e}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Blog;
