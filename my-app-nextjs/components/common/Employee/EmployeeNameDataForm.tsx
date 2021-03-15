import {Field, Form} from "react-final-form";
import React from "react";

const EmployeeNameDataForm = ({onSubmit, name, image}) => {
    return (
        <Form onSubmit={onSubmit}
              render={({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                      <img src={image}/>
                      <Field name='name' component='input' type='text' defaultValue={name}/>
                      <button type='submit'>Сохранить</button>
                  </form>
              )}>
        </Form>
    )
}

export default EmployeeNameDataForm
