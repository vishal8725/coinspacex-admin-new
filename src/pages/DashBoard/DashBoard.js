import React from 'react'
import "./DashBoard.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsLink, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

function DashBoard() {
  return (
    <div className="dashboard">
      <p className="header">Dashboard</p>
      <div className="container1">

        <div className="royal_pack"></div>

        <div className="basic_info">
          <div className="wallet_address">TVh2sKKwttGqGpQXxdncYEgkX2vqkNvvyQ</div>
          <div className="other_info">
            <div className="name"> <AiOutlineUser className="user_icon" />Abcdef</div>
            <div className="hash_info"><BsLink className="link_icon" />coinspacex.co/join/OPB4w1fT3</div>
            <div className="hash">TKbu8dTURXGA46eJ2h5nkGAMVYPWmNqBCM</div>
          </div>

          <div className="btn_group">
            <button className="buy btn">Buy DON Coin</button>
            <button className="upgrade btn">Upgrade</button>
            <button className="cxp btn">My CXP</button>
          </div>

          <div className="section3">
            <div className="package_info">
              <p className="joining">13 Sep, 2021</p>
              <p className="text">Joining</p>
            </div>
            <div className="earning_info">
              <p className="earning">1650 USDT</p>
              <p className="text">Earnings</p>
            </div>
            <div className="team_info">
              <p className="team">0</p>
              <p className="text">Team</p>
            </div>
            <div className="soicial_media">
              <button className="facebook"><BsFacebook className="fb_icon" /></button>
              <button className="twitter"><BsTwitter className="twi_icon" /></button>
              <button className="whatsapp"><BsWhatsapp className="wp_icon" /></button>
              <button className="telegram"><FaTelegramPlane className="tele_icon" /></button>
            </div>
          </div>
        </div>


      </div>

      <div className="container2">
        <div className="box1">
          <div className="box1_header">
            <p className="earning_header">Earning</p>
            <div className="total_earn">
              <p className="total_earning_header">Total Earning</p>
              <p className="amount">1,650 USDT</p>
              <div className="inner_box">
                <div className="comp1">
                  <div className="comp1_text">
                    <p className="comp1_header">CBP</p>
                    <p className="comp1_text">Compensation</p>
                  </div>
                  <div className="comp1_amount">
                    <p>0 USDT <AiOutlineArrowRight className="amount_icon" /></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
          <p className="size">0</p>
          <p className="team_size">Team Size</p>
          <p className="team_icon"><FiUsers /></p>
          <div className="inner_box2">
            <div className="symbol"></div>
            <div className="inner_box2_text">Direct</div>
            <div className="inner_box2_num">0</div>
          </div>
          <div className="inner_box3">
            <div className="symbo2"></div>
            <div className="inner_box3_text">Downlines</div>
            <div className="inner_box3_num">0</div>
          </div>
        </div>
        <div className="box3">
          <p className="coin">1100<br /> DON</p>
          <p className="coin_info">Free DON<br /> Coin Airdrop</p>
        </div>
        <div className="box4">
          <p className="announcement">Announcements</p>
          <p className="announcement_info">We Are LIVE With DON Leadership Bonus & CXP Credit Points System.<br />
            Explore the same and use the Amazing Opportunity To Accumulate Maximum DON COINs Through CXP & To Improve Your Ranks In DLB.<br />
            More Exciting Announcements Coming soon...</p>
        </div>
      </div>
    </div>
  )
}

export default DashBoard;
