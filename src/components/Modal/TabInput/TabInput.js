import React from 'react'
import { Input, DatePicker, Select } from "antd"
import { useSelector, useDispatch } from "react-redux";
import { setValues } from '../../../redux/tabs_reducer';
import UploadFile from "../../Modal/UpLoadFile"
import { STRING, DATE, UPLOAD, SELECT } from '../InputTypes'
import {Option} from "antd/lib/mentions";
import "./TabInput.scss"

const TabInput = ({ record, name, type,tabName ,options,filePath}) => {
    const { values,allData } = useSelector(state => state.tabs_reducer);
    const dispatch = useDispatch();



    const handleChange = (e) => {
        const foundObj = values?.[tabName].find(d => d.rowId == record.rowId);
        const newObj = { ...foundObj, [name]: e };
        let a = [...values?.[tabName]];
        a.splice(a.indexOf(foundObj), 1)
        a.push(newObj);

        dispatch(setValues({
            ...values,
            [tabName]: [...a]
        }));

    }


    let input = null;


    switch (type) {
        case STRING:
            input = (
                <Input
                    name={name}
                    // value={values && values[name]}
                    onChange={(e) => {

                        handleChange(e.target.value);
                    }}
                />
            );
            break;

            case SELECT:
            input = (
                    <div className="tab-select__option">
                        <Select
                            size="small"
                            name={name}
                            onChange={(e) => {
                                handleChange(e);
                                }
                            }>
                            {allData && allData[options]?.map((option, i) => (
                                <Option value={option.id} key={option.id}>
                                    {option.name}
                                </Option>
                            ))}
                        </Select>
                    </div>
            );
            break;

        case DATE:
            input = (
                <DatePicker
                    format="DD/MM/YYYY"
                    allowClear={false}
                    onChange={(_, dateString) => {
                        
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
                    filePath={filePath}

                />
            );
            break;

        default:
            break;

    }

    return input;

}

export default TabInput;