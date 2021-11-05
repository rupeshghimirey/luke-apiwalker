import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const SearchForm = () => {

    const[categories, setCategories] = useState([])

    const [formInfo, setFormInfo] = useState({
        category: "people",
        id: ""
    })
    const history = useHistory();

    useEffect(()=> {
        axios.get("https://swapi.dev/api")
        .then((response) => {
            console.log("response looks like this-->",response);
            setCategories(Object.keys(response.data))
        })
        .catch((err) => {
            console.log(err);
    });
    },[]);

    const changeHandler = (e)=> {
        setFormInfo({...formInfo, 
            [e.target.name]: e.target.value
        })
    }

    // redirect the form using useHistory
    const formSubmit = (e) => {
        e.preventDefault();
        console.log("form has been submitted")
        console.log(formInfo)
        axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}`)
        .then((response) => {
            console.log("response looks like this after submit-->",response.data);
        })
        .catch((err) => {
            console.log(err);
        },[]);
        history.push(`/${formInfo.category}/${formInfo.id}`)

    }

    return (
        <div>
            <div>
                <form onClick={formSubmit} className="form-inline row g-3 align-items-center mt-3 " action="">
                    <div className="col-auto">
                        <select onChange={changeHandler} className="form-select"   name="category" id="">

                            {
                                categories.map((eachCat,i)=>{
                                    return <option value={eachCat}>{eachCat}</option>
                                })
                                    
                            }
                        </select>
                    </div>
                    <div className="col-auto">
                        {/* <label className="sr-only">ID:</label> */}
                        <input onChange={changeHandler} type="number" class="form-control" name="id"></input>

                    </div>

                    <div className="col-auto ">
                        <button type="submit" class="btn btn-primary">Search</button>

                    </div>
                </form>
            </div>
        </div>
    );
};


export default SearchForm;