import React, { useState } from 'react'
import dai from '../dai.png'

export default function Main(props) {
  const [input, setInput] = useState('');

  return (
    <div id="content" className="mt-3">

      <table className="table table-borderless text-muted text-center">
        <thead>
          <tr>
            <th scope="col">Staking Balance</th>
            <th scope="col">Reward Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{window.web3.utils.fromWei(props.stakingBalance, 'Ether')} mDAI</td>
            <td>{window.web3.utils.fromWei(props.dappTokenBalance, 'Ether')} DAPP</td>
          </tr>
        </tbody>
      </table>

      <div className="card mb-4" >

        <div className="card-body">

          <form className="mb-3" onSubmit={(event) => {
              event.preventDefault()
              let amount
              amount = input
              amount = window.web3.utils.toWei(amount, 'Ether')
              props.stakeTokens(amount)
            }}>
            <div>
              <label className="float-left"><b>Stake Tokens</b></label>
              <span className="float-right text-muted">
                Balance: {window.web3.utils.fromWei(props.daiTokenBalance, 'Ether')}
              </span>
            </div>
            <div className="input-group mb-4">
              <input
                type="text"
                onChange={event => setInput(event.target.value)}
                className="form-control form-control-lg"
                placeholder="0"
                required />
              <div className="input-group-append">
                <div className="input-group-text">
                  <img src={dai} height='32' alt=""/>
                  &nbsp;&nbsp;&nbsp; mDAI
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
          </form>
          <button
            type="submit"
            className="btn btn-link btn-block btn-sm"
            onClick={(event) => {
              event.preventDefault()
              props.unstakeTokens()
            }}>
              UN-STAKE...
            </button>
        </div>
      </div>

    </div>
  );
}