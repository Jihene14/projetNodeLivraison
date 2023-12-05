import swaggerAutogen from "swagger-autogen";

const outputFile = "./swagger_output.json";
const endpointFile = ["./server.js"];
    swaggerAutogen(outputFile, endpointFile);