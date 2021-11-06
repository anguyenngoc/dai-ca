import React, { useEffect, useRef, useState } from 'react';

export const Modal = ({list}) => {

    const loanRef = useRef(null);
    const dateRef = useRef(null);

    const [frmVal, setFrmVal] = useState();

    const handelerData = () => {
        list('heloo');
        const dateF = dateRef?.current?.value?.split('-');
        let idx = JSON.parse(localStorage.getItem('index'));
        idx += 1;
        localStorage.setItem("index", JSON.stringify(idx));
        setFrmVal(
            {
                loan: loanRef.current.value,
                date: dateRef?.current?.value && `${dateF[1]}/${dateF[2]}/${dateF[0]}`,
                index: idx,
            }
        )
        loanRef.current.value = '';
        dateRef.current.value = '';
    }


    useEffect(() => {
        const handlerStoreData = (i) => {
            let f = JSON.parse(localStorage.getItem("loans")) || [];
            const news = [...f, frmVal];
            localStorage.setItem("loans", JSON.stringify(news));
            setFrmVal(null);
        }

        if(frmVal?.loan && frmVal?.date) {
            handlerStoreData();
        }

    }, [frmVal, list]);


    return (
        <>
            <div className="modal fade" id="ModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Khoản vay</label>
                                <input type="number" className="form-control" id="loan" ref={loanRef} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ngày cho vay</label>
                                <input type="date" className="form-control" id="date" ref={dateRef} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn btn-primary" onClick={() => handelerData()}>
                                add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end" style={{ padding: '5px' }}>
                <a className="btn btn-light" data-bs-toggle="modal" href="#ModalToggle" role="button">+</a>
            </div>
        </>
    )
}