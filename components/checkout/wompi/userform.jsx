import { useForm, Controller } from 'react-hook-form';

const UserForm = () => {
  const { control, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="apellidos"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Apellidos" />}
      />
      <Controller
        name="nombre"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Nombre" />}
      />
      <Controller
        name="pais"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="País/Región" />}
      />
      <Controller
        name="direccion"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Dirección de la Calle" />}
      />
      <Controller
        name="ciudad"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Local/Ciudad" />}
      />
      <Controller
        name="municipio"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Municipio" />}
      />
      <Controller
        name="codigo_postal"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Código postal" />}
      />
      <Controller
        name="telefono"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Teléfono" />}
      />
      <Controller
        name="correo_electronico"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} placeholder="Dirección de correo elétronico" />}
      />
      <Controller
        name="notas"
        control={control}
        defaultValue=""
        render={({ field }) => <textarea {...field} placeholder="Notas del pedido" />}
      />
      <input type="submit" value="Enviar" />
    </form>
  );
}

export default UserForm
