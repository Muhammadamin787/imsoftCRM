import React from 'react'
import { Input, DatePicker } from "antd"
import { useSelector, useDispatch } from "react-redux";
import { setValues } from '../../../redux/tabs_reducer';
import UploadFile from "../../Modal/UpLoadFile"
import { STRING, DATE, UPLOAD } from '../InputTypes'

const TabInput = ({ record, name, type }) => {
    const { values } = useSelector(state => state.tabs_reducer);
    const dispatch = useDispatch();



    const handleChange = (e) => {
        const foundObj = values.dev_docs.find(d => d.rowId == record.rowId);
        const newObj = { ...foundObj, [name]: e };
        let a = [...values.dev_docs];
        a.splice(a.indexOf(foundObj), 1)
        a.push(newObj);
        dispatch(setValues({
            ...values,
            dev_docs: [...a]
        }));

        // console.log(values);

    }

    let input = null;

    switch (type) {
        case STRING:
            input = (
                <Input
                    name={name}
                    // value={values && values[name]}
                    onChange={(e) => {
                        const target = {
                            [name]: e.target.value,
                        };
                        handleChange(e.target.value);
                    }}
                />
            );
            break;

        case DATE:
            input = (
                <DatePicker
                    format="DD.MM.YYYY"
                    allowClear={false}
                    onChange={(_, dateString) => {
                        const target = {
                            [name]: dateString,
                        };
                        handleChange(dateString);
                    }}
                />
            );
            break;

        case UPLOAD:
            input = (
                <UploadFile
                    id="file-uploder"
                    name={name}
                    label="Upload"
                    handleChange={handleChange}
                />
            );
            break;

        default:
            break;

    }

    return input;

}

export default TabInput;