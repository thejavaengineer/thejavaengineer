const questions1 = [
    {
        question: "Which design pattern ensures that a class has only one instance and provides a global point of access to it?",
        options: ["Factory Method", "Builder", "Singleton", "Adapter"],
        correct: 2,
        explanation: "The Singleton pattern ensures a class has only one instance and provides a global point of access to it. It is commonly used in scenarios like managing configurations."
    },
    {
        question: "Which design pattern is used when you need to create an object based on a set of input parameters?",
        options: ["Builder", "Prototype", "Factory Method", "Abstract Factory"],
        correct: 2,
        explanation: "The Factory Method pattern allows the creation of objects without specifying the exact class of object that will be created."
    },
    {
        question: "Which design pattern should be used to handle cross-cutting concerns like logging and transaction management?",
        options: ["Adapter", "Proxy", "Strategy", "Observer"],
        correct: 1,
        explanation: "The Proxy pattern provides a surrogate or placeholder for another object to control access to it, making it suitable for logging, transactions, and other cross-cutting concerns."
    },
    {
        question: "Which design pattern helps in decoupling the sender and receiver of a request in a Spring Boot application?",
        options: ["Command", "Observer", "Decorator", "Strategy"],
        correct: 0,
        explanation: "The Command pattern encapsulates a request as an object, thereby decoupling the sender from the receiver. It is useful in scenarios like transaction management and job scheduling."
    },
    {
        question: "Which design pattern allows you to create a family of related objects without specifying their concrete classes?",
        options: ["Factory Method", "Abstract Factory", "Builder", "Prototype"],
        correct: 1,
        explanation: "The Abstract Factory pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. It is commonly used in UI libraries."
    }
];

const questions2 = [
    {
        question: "In a microservices architecture, which pattern is used to enable communication between services asynchronously?",
        options: ["Circuit Breaker", "API Gateway", "Event-Driven", "Saga"],
        correct: 2,
        explanation: "The Event-Driven pattern allows services to communicate asynchronously using events, promoting loose coupling and scalability in a microservices architecture."
    },
    {
        question: "Which design pattern is typically used to manage distributed transactions in a microservices environment?",
        options: ["Event Sourcing", "Saga", "Circuit Breaker", "Observer"],
        correct: 1,
        explanation: "The Saga pattern is used to manage distributed transactions by breaking them into smaller, manageable transactions that can be coordinated across multiple services."
    },
    {
        question: "What design pattern should be used to handle failures and retries in a microservice architecture?",
        options: ["Adapter", "Observer", "Circuit Breaker", "Command"],
        correct: 2,
        explanation: "The Circuit Breaker pattern helps prevent a network or service failure from cascading and allows retry mechanisms in a controlled manner."
    },
    {
        question: "Which pattern allows services to offload long-running tasks and respond immediately to the client?",
        options: ["Queue-based Load Leveling", "Event-Driven", "Saga", "Bulkhead"],
        correct: 0,
        explanation: "Queue-based Load Leveling pattern uses message queues to offload tasks that might take a long time to complete. It allows services to respond immediately and handle tasks asynchronously."
    },
    {
        question: "Which design pattern can be used to protect microservices from overload by isolating failures and limiting resource consumption?",
        options: ["Bulkhead", "Circuit Breaker", "Observer", "Strategy"],
        correct: 0,
        explanation: "The Bulkhead pattern isolates resources so that a failure in one part of the system does not overwhelm the entire service, thus preventing service-wide failure."
    }
];

const questions3 = [
    {
        question: "In Spring Boot, which design pattern is used to manage dependency injection?",
        options: ["Factory Method", "Decorator", "Singleton", "Inversion of Control"],
        correct: 3,
        explanation: "Spring Boot follows the Inversion of Control (IoC) design pattern for managing dependency injection, allowing the framework to manage the lifecycle and dependencies of beans."
    },
    {
        question: "Which Spring Boot annotation is used to handle asynchronous tasks?",
        options: ["@Transactional", "@Async", "@Scheduled", "@Controller"],
        correct: 1,
        explanation: "@Async is used to execute methods asynchronously in Spring Boot, helping to handle long-running operations on separate threads."
    },
    {
        question: "Which Spring Boot annotation automatically configures your application based on the dependencies available on the classpath?",
        options: ["@SpringBootApplication", "@Configuration", "@EnableAutoConfiguration", "@RestController"],
        correct: 2,
        explanation: "@EnableAutoConfiguration helps Spring Boot to automatically configure beans based on the classpath and other application settings, simplifying the setup."
    },
    {
        question: "Which pattern is used by Spring to manage the creation of beans in a controlled way?",
        options: ["Prototype", "Factory Method", "Singleton", "Abstract Factory"],
        correct: 1,
        explanation: "The Factory Method pattern in Spring is used to manage the creation of beans dynamically and control the instantiation process without specifying the exact bean class."
    },
    {
        question: "Which pattern helps Spring handle different implementations of the same interface based on the application’s runtime conditions?",
        options: ["Strategy", "Template Method", "Adapter", "Facade"],
        correct: 0,
        explanation: "The Strategy pattern allows Spring to choose the appropriate implementation of an interface at runtime based on the application's requirements."
    }
];

const questions4 = [
    {
        question: "Which design pattern is commonly used in Spring Boot to aggregate multiple service calls behind a single API?",
        options: ["Event Sourcing", "Facade", "Decorator", "API Gateway"],
        correct: 3,
        explanation: "The API Gateway pattern is used to aggregate multiple service calls behind a single API, simplifying client interactions in a microservices architecture."
    },
    {
        question: "What is the purpose of the Circuit Breaker pattern in a Spring Boot microservices architecture?",
        options: ["Managing concurrent requests", "Preventing service overload and cascading failures", "Scheduling tasks", "Creating new beans"],
        correct: 1,
        explanation: "The Circuit Breaker pattern prevents service overload and cascading failures by controlling the interaction between services and stopping requests when a service is unresponsive."
    },
    {
        question: "In Spring, which design pattern is used to wrap one service or component in order to add behavior or functionality dynamically?",
        options: ["Adapter", "Decorator", "Facade", "Factory"],
        correct: 1,
        explanation: "The Decorator pattern is used to dynamically add behavior or functionality to a component by wrapping it in another component."
    },
    {
        question: "Which Spring Boot pattern is ideal for performing operations on data before or after method execution (e.g., logging or transaction management)?",
        options: ["Observer", "Command", "Proxy", "Aspect-Oriented Programming (AOP)"],
        correct: 3,
        explanation: "Aspect-Oriented Programming (AOP) in Spring is used to handle cross-cutting concerns like logging, security, or transaction management by executing additional behavior before or after method execution."
    },
    {
        question: "Which pattern helps manage distributed transactions across microservices in Spring Boot?",
        options: ["Circuit Breaker", "Saga", "Event Sourcing", "Chain of Responsibility"],
        correct: 1,
        explanation: "The Saga pattern in Spring Boot helps manage distributed transactions across microservices by breaking them into smaller sub-transactions that can be rolled back if needed."
    }
];

const questions5 = [
    {
        question: "Which pattern is used when you need to decouple the interface from its implementation, often seen in Spring using Dependency Injection?",
        options: ["Observer", "Adapter", "Strategy", "Proxy"],
        correct: 2,
        explanation: "The Strategy pattern allows you to define a family of algorithms or behaviors and make them interchangeable. In Spring, it's commonly used for Dependency Injection."
    },
    {
        question: "In microservices, which design pattern enables services to fail gracefully and retry when a downstream service fails?",
        options: ["Circuit Breaker", "Observer", "Adapter", "Template Method"],
        correct: 0,
        explanation: "The Circuit Breaker pattern is used to prevent cascading failures by failing gracefully and retrying service calls after a specified period."
    },
    {
        question: "Which design pattern would you use in Spring Boot to conditionally load beans based on the environment or application state?",
        options: ["Abstract Factory", "Factory Method", "Prototype", "Conditional"],
        correct: 3,
        explanation: "The Conditional pattern (using @Conditional annotations in Spring Boot) helps load beans or configurations conditionally based on application state or environment properties."
    },
    {
        question: "Which pattern is used by Spring Boot to execute scheduled tasks at fixed intervals or specific times?",
        options: ["Observer", "Command", "Scheduler", "Template Method"],
        correct: 2,
        explanation: "The Scheduler pattern (using @Scheduled in Spring Boot) is used to execute scheduled tasks at fixed intervals or specific times in Spring Boot applications."
    },
    {
        question: "Which design pattern allows you to define a step-by-step procedure where each step can be overridden or extended without changing the structure?",
        options: ["Strategy", "Template Method", "Command", "Decorator"],
        correct: 1,
        explanation: "The Template Method pattern defines a skeleton of an algorithm in a method, allowing subclasses to override specific steps without changing its structure."
    }
];
