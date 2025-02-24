import React from 'react';
import Form from '@rjsf/core';
import testSchema from '../schema/test.json';

const ReactJsonSchema = () => {
  const handleSubmit = ({ formData }) => {
    console.log("Submitted data:", formData);
  };


  return (
    <div>
      <h2>Auto Generated Form</h2>
      <Form schema={testSchema} onSubmit={handleSubmit} />
    </div>
  );
};

export default ReactJsonSchema;
