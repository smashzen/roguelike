import React from 'react'
import Status from './Status'
import Dungeon from './Dungeon'
import Modal from 'react-modal'

const customStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.35)'
  },
  content: {
    position: 'absolute',
    top: '120px',
    left: '30%',
    right: 'auto',
    bottom: 'auto',
    width: '300px',
    border: '1px solid #ccc',
    background: '#fff',
    color: '#333',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'

  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      health: 100,
      weaponCurrent: {name: 'stick', power: 10},
      heroProwess: 1,
      monstersKilled: 0,
      dungeonLevel: 1,
      modalIsOpen: true,
      modalMessage: 'Test Message!!!!!!!',
      modalButtonText: 'Enter the Dungeon'
    }
    this.upgradeWeapon = this.upgradeWeapon.bind(this)
    this.addHealth = this.addHealth.bind(this)
    this.moveToNextDungeon = this.moveToNextDungeon.bind(this)
    this.logMonsterKill = this.logMonsterKill.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  upgradeWeapon (dLevel) {
    let weaponCache = [
      {name: 'stick', power: 10},
      {name: 'knife', power: 20},
      {name: 'mace', power: 30},
      {name: 'sword', power: 40},
      {name: 'shotgun', power: 50}
    ]
    this.setState({weaponCurrent: weaponCache[dLevel]})
  }

  addHealth (num) {
    let newHealth = this.state.health + num
    this.setState({health: newHealth})
  }

  logMonsterKill () {
    let newMK = this.state.monstersKilled + 1
    let newHP = 1 + Math.floor(newMK / 6)
    this.setState({monstersKilled: newMK, heroProwess: newHP})
  }

  moveToNextDungeon () {
    let dunPlusOne = this.state.dungeonLevel + 1
    this.setState({dungeonLevel: dunPlusOne})
  }

  openModal (message) {
    this.setState({modalIsOpen: true, modalMessage: message})
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () {
    return (
      <div className='app'>
        <div id='statusBar'>
          <Status
            health={this.state.health}
            weaponCurrent={this.state.weaponCurrent}
            heroProwess={this.state.heroProwess}
            dungeonLevel={this.state.dungeonLevel}
          />
        </div>
        <div id='modalDiv'>
          <Modal
            isOpen={this.state.modalIsOpen}
            style={customStyle}
            contentLabel='Modal'
          >
            <h2>{this.state.modalMessage}</h2>
            <button onClick={this.closeModal}>
              {this.state.modalButtonText}
            </button>
          </Modal>
        </div>
        <div id='dungeon'>
          <Dungeon
            health={this.state.health}
            weaponCurrent={this.state.weaponCurrent}
            heroProwess={this.state.heroProwess}
            dungeonLevel={this.state.dungeonLevel}
            upgradeWeapon={(dLevel) => this.upgradeWeapon(dLevel)}
            addHealth={(num) => this.addHealth(num)}
            moveToNextDungeon={() => this.moveToNextDungeon()}
            logMonsterKill={() => this.logMonsterKill()}
          />
        </div>
      </div>
    )
  }

}
