import React from 'react';
import { Modal, Button, Row, Col } from 'antd';
import Form from './usersModalContaint'

class userContainer extends React.Component {
  state = {
    modalVisible: false,
    modal3Visible: false,
  }
  setmodalVisible = (modalVisible) => {
    this.setState({ modalVisible });
  }
  
  setmodal3Visible = (modal3Visible) => {
    this.setState({ modal3Visible });
  }

  handleSubmit = () => { this.form.handleSubmit(this.props.handleCreate); }
  handleDeleteCaso = () =>{this.form.handleDeleteCaso(this.props.deleteCaso)}



  handleModoTitle() {
    if (this.props.modo === "ver") {
      return (
        <Row gutter={8} type="flex" justify="end">
          <Col xs={12} sm={22}><h3>Detalles del Usuario</h3></Col>
          <Col xs={12} sm={2}><Button icon="close" onClick={() => this.setmodalVisible(false)}></Button></Col>
        </Row>)
    }
    return (
      <Row gutter={8} type="flex" justify="end">
        <Col xs={12} sm={22}><h3>Ficha del Usuario</h3></Col>
        <Col xs={12} sm={2}><Button icon="close" onClick={() => this.setmodalVisible(false)}></Button></Col>
      </Row>)
  }

  handleModoOpenerTitle() {
    if (this.props.modo === "ver") {
      return <Button onClick={() => this.setmodalVisible(true)}>Detalles</Button>
    }
    return <Button icon="file-add" type="primary" onClick={() => this.setmodalVisible(true)}>Agregar</Button>
  }

  handleModoFooter() {
    if (this.props.modo === "ver") {
      return (
        <Row gutter={8} type="flex" justify="end">
          <Col xs={12} sm={7}><Button type="danger" loading={this.props.loading} ghost  onClick={() => this.setmodal3Visible(true)}>Eliminar</Button></Col>
        </Row>
      )
    } else {
      return (
        <Row gutter={8} type="flex" justify="end">
          <Col xs={12} sm={7}><Button type="primary" loading={this.props.loading} ghost onClick={this.handleSubmit}>Agregar</Button></Col>
          <Col xs={12} sm={7}><Button type="danger" ghost onClick={() => this.setmodalVisible(false)}>Cancelar</Button></Col>
        </Row>
      )
    }
  }

  handleDeleteFooter(){
    return(
      <Row gutter={8} type="flex" justify="end">
            <Col xs={12} sm={7}><Button type="primary" loading={this.props.loading} ghost onClick={()=>this.handleDeleteCaso()}>Eliminar</Button></Col>
            <Col xs={12} sm={7}><Button type="danger"  ghost onClick={() => this.setmodal3Visible(false)}>Cancelar</Button></Col>
      </Row>
    )
  }

  render() {
    return (
      <div>
        <Row>
          {this.handleModoOpenerTitle()}
          <Modal
            title={this.handleModoTitle()}
            maskStyle={{ backgroundColor: "#88beb6" }}
            destroyOnClose
            closable={false}
            visible={this.state.modalVisible}
            onCancel={() => this.setmodalVisible(false)}
            footer={[
              this.handleModoFooter()
            ]}
          >
            <Form visible={this.setmodalVisible} onRef={ref => (this.form = ref)} usuario={this.props.usuario} modo={this.props.modo} row={this.props.row} editCaso={this.props.editCaso}/>
          </Modal>
        </Row>
        <Row>
      <Modal
          title="¿Desea eliminar usuario?"
          visible={this.state.modal3Visible}
          destroyOnClose
          closable={false}
          onCancel={()=>this.setmodal3Visible(false)}
          footer={[
            this.handleDeleteFooter()
          ]}
          >
        </Modal>
      </Row>
      </div>
    );
  }
}

export default userContainer