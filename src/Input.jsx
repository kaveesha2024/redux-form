import TextField from '@mui/material/TextField';
const Input = ({labelName, inputType, onChange, initialValue}) => {
    return(
        <>
            <input
                style={{padding:'10px', border: 'solid black 1px', borderRadius: '5px'}}
                type={inputType}
                placeholder={labelName}
                onChange={onChange}
                value={initialValue}
            />
        </>
    );
};

export  default Input;