
import React from 'react'
import { AiFillCaretDown, AiFillStar, AiOutlineInbox, AiOutlinePlus, AiOutlineSend } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import { MdDrafts, MdWatchLater } from 'react-icons/md';
import { FaFacebookMessenger, FaKeyboard, FaTrash } from 'react-icons/fa';
import { BiListUl, BiVideo } from 'react-icons/bi';


function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <div className="sidebar_composeBtn">
                    <GrAdd />
                    <span> Compose </span>
                </div>
                <div className="sidebar_options">
                    <div className="option option_active">
                        <AiOutlineInbox />
                        <span> Inbox </span>
                    </div>

                    <div className="option">
                        <AiFillStar />
                        <span> Starred </span>
                    </div>

                    <div className="option">
                        <MdWatchLater />
                        <span> Snoozed </span>

                    </div>

                    <div className="option">
                        <FaFacebookMessenger />
                        <span> Important </span>
                    </div>

                    <div className="option">
                        <AiOutlineSend />
                        <span> Sent </span>
                    </div>

                    <div className="option">
                        < MdDrafts />
                        <span> Draft  </span>
                    </div>

                    <div className="option">
                        <BiListUl />
                        <span> Categories </span>
                    </div>

                    <div className="option">
                        <FaTrash />
                        <span> Map/ Trash </span>
                    </div>



                </div>


            </div>

            <div className="sidebar_options">
                <h4>Meet</h4>
                <div className="option option_active">
                    <BiVideo />
                    <span> Join Meeting </span>
                </div>
                <div className="option option_active">
                    <FaKeyboard />
                    <span> New Meeting </span>
                </div>
            </div>


            <div className="sidebar_options">
                <h4>Hangout</h4>
                <div className="hangoutoptions">
                    <div className="hangoutoptions_left">
                        <BiVideo />
                        <span>Monidasna singh</span>
                        <AiFillCaretDown />
                    </div>
                    <div className="hangout_right">
                        <AiOutlinePlus/>
                    </div>
                </div>
                <div className="hangoutoptions">
                    <div className="hangoutoptions_left">
                        <BiVideo />
                        <span>diozesk singh</span>
                        <AiFillCaretDown />
                    </div>
                    <div className="hangout_right">
                        <AiOutlinePlus/>
                    </div>
                </div>
                <div className="hangoutoptions">
                    <div className="hangoutoptions_left">
                        <BiVideo />
                        <span>meskolvaisita singh</span>
                        <AiFillCaretDown />
                    </div>
                    <div className="hangout_right">
                        <AiOutlinePlus/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Sidebar;
