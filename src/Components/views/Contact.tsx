import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';

export const Contact = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <BoxForm sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1
    }}>
      <h1>Cotiza tu idea</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}><label htmlFor='name'>Nombre</label>
          {errors.name && <span>Este campo es requerido</span>}
        </Box>
        <input type='text' id='name' {...register('name', {
          required: true,
          maxLength: 20,
          minLength: 3
        })} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <label htmlFor='email'>Email</label>
          {errors.email && <span>Este campo es requerido</span>}
        </Box>
        <input type='email' id='email' {...register('email', {
          required: true,
          pattern: /^\S+@\S+$/i
        }
        )} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <label htmlFor='color'>Color</label>
          {errors.color && <span>Este campo es requerido</span>}
        </Box>
        <input type='text' id='color' {...register('color', {
          required: true,
          maxLength: 20,
          minLength: 3
        }
        )} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <label htmlFor='size'>Tamaño(cm o mm)</label>
          {errors.size && <span>Este campo es requerido</span>}</Box>
        <input type='text' id='size' {...register('size', {
          required: true,
          maxLength: 20,
          minLength: 3
        }
        )} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <label htmlFor='quantity'>Cantidad</label>
          {errors.quantity && <span>Este campo es requerido</span>}</Box>
        <input type='number' id='quantity' {...register('quantity',
          {
            required: true,
            min: 1,
            max: 1000
          }
        )} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <label htmlFor='material'>Material</label>
          {errors.material && <span>Este campo es requerido</span>}</Box>
        <select
          value='material'
          {...register('material',
            {
              required: true,
            })}
        >
          <option value={1}>Pla</option>
          <option value={2}>Petg</option>
          <option value={3}>Flex</option>
          <option value={4}>Abs</option>
          <option value={5}>Nylon</option>
        </select>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <label htmlFor='message'>Comentarios</label>
          {errors.message && <span>Este campo es requerido</span>}</Box>
        <textarea id='message' {...register('message')} />
        <label htmlFor='file'>Archivo</label>
        <input type='file' id='file' {...register('file',
          {
            required: true,
          })} />
        <input className='buttonS' type='submit' value='Enviar' />
      </form>
    </BoxForm>
  );
}


const BoxForm = styled(Box)`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  label {
    font-weight: 600;
    text-align: left;
    width: 100%;
    margin-bottom: 10px;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
    &:focus {
      outline: none;
      border-color: #888;
    }
  }
  .buttonS {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: none;
    background-color: #f50057;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      background-color: #ff1744;
    }
  }
  span {
    font-size: .8rem;
    width: 100%;
    color: red;
  }
`;