import React, { useEffect, useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from './../firebase.js'

const Tes3 = () => {

    const [inputJudulBuku, setInputJudulBuku] = useState()
    const [judulBukuList, setJudulBukuList] = useState()
    const [loading, setLoading] = useState("Loading")
    const [idEdit, setIdEdit] = useState()

    // const db = firebase.ref("/tutorials");

    useEffect(()=>{
        const db = firebase.database().ref('/data')
        db.on('value', (snapshot) => {
            let data = snapshot.val()
            console.log(data)
            if(!data){
                setLoading("Tidak ada data")
                setJudulBukuList(data)
            }else{
                setJudulBukuList(data)
            }
        })
    },[])


    const createData = (e) => {
        e.preventDefault();
        console.log(inputJudulBuku)
        if(inputJudulBuku === undefined){
            return alert("Judul Tidak Boleh Kosong")
        }else{
            if(idEdit){
                firebase.database()
                .ref(`/data/${idEdit}`)
                .update({inputJudulBuku})
                setIdEdit()
            }else{
                firebase.database()
                .ref('/data')
                .push()
                .set({ inputJudulBuku })
                // .then((res) => );
            }
        }
    }

    const deleteData = (id) => {
        console.log(id)
        firebase.database()
        .ref(`/data/${id}`).remove();
    }

    const renderListBuku = () => {
        console.log(judulBukuList)
        if(!judulBukuList){
            return(
                <tr key={1}>
                    <td colSpan={2}>{loading}</td>
                </tr>
            )
        }else {
            return Object.keys(judulBukuList).map((val,index)=>{
                console.log(val)
                return(
                    <tr key={index}>
                        <td>{judulBukuList[val].inputJudulBuku}</td>
                        <td>
                            <Button variant="danger" 
                            onClick={()=>deleteData(val)}>
                                Delete
                            </Button>
                            <Button variant="info"
                            style={{marginLeft:"10px"}} 
                            onClick={()=>{
                                setInputJudulBuku(judulBukuList[val].inputJudulBuku)
                                setIdEdit(val)
                            }}>
                                Edit
                            </Button>
                        </td>
                    </tr>
                )
            })
        }
    }

    return(
        <div style ={{
            display: "flex",
            alignItems:"center",
            marginTop: '50px',
            height: '100vh',
            flexDirection:"column"
        }}>
            <div>
                <Link to="/">
                    <p> 
                        {"< Back"}
                    </p>
                </Link>
            </div>
            <div style = {{
                minWidth: '500px',
                border: 'solid 1px black',
                borderRadius: '10px',
                padding: '10px'
            }}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Judul Buku:</Form.Label>
                        <Form.Control type="text" placeholder="Tambahkan Judul Buku" 
                        value={inputJudulBuku}
                        onChange={(e) => {
                            setInputJudulBuku(e.target.value)}
                        }/>
                    </Form.Group>
                    <Button variant="primary" type="submit" 
                    onClick={(e)=>createData(e)}>
                        {idEdit?"Edit":"Tambah"}
                    </Button>
                </Form>
            </div>
            <div style={{minWidth:"500px", marginTop:"50px"}}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th style={{minWidth:"300px"}}>Judul Buku</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderListBuku()}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Tes3