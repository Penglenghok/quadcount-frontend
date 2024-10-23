import { useEffect, useState } from 'react';
import { Empty } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Expense } from '../../expense_types';
import LoadingComponent from '../../components/Loading';
import _ from 'lodash';
import './style.css'
import ExpenseModal from '../../components/ExpenseModal';
import { expense_members } from '../../mock_data';
import Dollar from '../../assets/dollars.webp';

const Expenses = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const [loadingConfirm, setLoadingConfirm] = useState(false)
    const [expenses, setExpenses] = useState<Expense[]>([])
    const [selectedExpense, setSelectedExpense] = useState<Expense>()

    useEffect(() => {
        fetchExpense()
    }, [])

    // Here gonna call GET LIST API
    const fetchExpense = () => {
        setTimeout(() => setLoading(false), 1500)
    }

    // Here gonna call POST EXPENSE API
    const addExpense = (expense: Expense) => {
        setExpenses([...expenses, expense])
        setIsOpen(false)
    }

    // Here gonna call PUT EXPENSE API
    const editExpense = () => { }

    if (loading) return <LoadingComponent></LoadingComponent>

    return <div className="container-sm relative h-full">
        {
            _.isEmpty(expenses) ? <div className='h-full flex items-center'>
                <div className='text-center'>
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        description={<h1 className='text-white'>No Expenses Yet</h1>} />
                    <p>Add an expense by tapping on the "+" to start tracking and splitting your expenses</p>
                </div>
            </div> : <div className='expenses_list-wrapper'>
                <h3 className='mb-0'>Expenses:</h3>
                {
                    expenses?.map((i, inx) => <div className='expenses_list-item' key={`exp_${inx}_${i.id}`}>
                        <img src={Dollar} width={24} height={24} />
                        <div className='expense_detail'>
                            <div className='expense_title'>{i.title}</div>
                            <div className='expense_detail'>Paid by: {i.paid_by.name}</div>
                        </div>
                        <div className='expense_amount'>{i.amount} $</div>
                        <div className='expense_delete'>Delete</div>
                    </div>)
                }
            </div>
        }

        <div onClick={() => setIsOpen(!isOpen)} className='floating_button flex items-center justify-center'>
            <PlusOutlined />
        </div>

        <ExpenseModal
            isModalOpen={isOpen}
            loading={loadingConfirm}
            handleOk={addExpense}
            handleCancel={() => setIsOpen(false)}
            title={"Add Expense"}
            submitTxt={"Add"}
            members={expense_members}
        />
        <ExpenseModal
            isModalOpen={isEditOpen}
            loading={loadingConfirm}
            handleOk={editExpense}
            handleCancel={() => setIsOpen(false)}
            title={"Edit Expense"}
            submitTxt={"Edit"}
            expense={selectedExpense}
            members={expense_members}
        />
    </div >
}

export default Expenses