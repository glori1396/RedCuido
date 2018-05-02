import React from 'react';
import { Modal, Button, Row, Col, Input } from 'antd';
import Form from './visitaModalContaint'

class visitaContainer extends React.Component {
  state = {
    modalVisible: false,
    modal2Visible: false,
    modal3Visible: false
  }
  setmodalVisible = (modalVisible) => {
    this.setState({ modalVisible });
  }

  setmodal2Visible = (modal2Visible) => {
    this.setState({ modal2Visible });
  }

  setmodal3Visible = (modal3Visible) => {
    this.setState({ modal3Visible });
  }

  handleSubmit = () =>{this.form.handleSubmit(this.props.handleCreate);}
  handleAcceptCaso = (nota) =>{this.form.handleAcceptCaso(this.props.acceptCaso, nota,this.props.usuario)}
  handleRejectCaso = (nota) =>{this.form.handleRejectCaso(this.props.rejectCaso, nota,this.props.usuario)}


  handleModoTitle(){
    if (this.props.modo==="ver"){
      return(
      <Row gutter={8} type="flex" justify="end">
      <Col xs={12} sm={22}><h3>Detalles del Perfil</h3></Col>
      <Col xs={12} sm={2}><Button icon="close" onClick={() => this.setmodalVisible(false)}></Button></Col>
       </Row>)}
       return(
        <Row gutter={8} type="flex" justify="end">
        <Col xs={12} sm={22}><h3>Ficha de Postulación del Perfil</h3></Col>
        <Col xs={12} sm={2}><Button icon="close" onClick={() => this.setmodalVisible(false)}></Button></Col>
         </Row>)
  }

  handleModoOpenerTitle(){
    if (this.props.modo==="ver"){
      return <Button onClick={() => this.setmodalVisible(true)}>Detalles</Button>
    }
    return <Button icon="file-add" type="primary" onClick={() => this.setmodalVisible(true)}>Agregar</Button>

  }

  handleModoFooter(){
    if (this.props.modo==="ver"){
      return(
        <Row gutter={8} type="flex" justify="end">
              <Col xs={12} sm={7}><Button type="primary" loading={this.props.loading} ghost onClick={() => this.setmodal2Visible(true)}>Aceptar Perfil</Button></Col>
              <Col xs={12} sm={7}><Button type="danger"  loading={this.props.loading} ghost onClick={() => this.setmodal3Visible(true)}>Rechazar Perfil</Button></Col>
        </Row>
      )
    }
    return(
      <Row gutter={8} type="flex" justify="end">
            <Col xs={12} sm={7}><Button type="primary"  loading={this.props.loading} ghost onClick={this.handleSubmit}>Agregar Perfil</Button></Col>
            <Col xs={12} sm={7}><Button type="danger"  ghost onClick={() => this.setmodalVisible(false)}>Cancelar</Button></Col>
      </Row>
    )
  }

  handleAceptarFooter(){
      return(
        <Row gutter={8} type="flex" justify="end">
              <Col xs={12} sm={7}><Button type="primary" loading={this.props.loading} ghost onClick={()=>this.handleAcceptCaso(document.getElementById("nota").value)}>Aceptar</Button></Col>
              <Col xs={12} sm={7}><Button type="danger"  ghost onClick={() => this.setmodal2Visible(false)}>Cancelar</Button></Col>
        </Row>
      )
  }

  handleRechazarFooter(){
    return(
      <Row gutter={8} type="flex" justify="end">
            <Col xs={12} sm={7}><Button type="primary" loading={this.props.loading} ghost onClick={()=>this.handleRejectCaso(document.getElementById("nota").value)}>Aceptar</Button></Col>
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
          maskStyle={{backgroundColor:"#3aa4a4"}}
          destroyOnClose
          closable={false}
          visible={this.state.modalVisible}
          onCancel={() => this.setmodalVisible(false)}
          footer={[
            this.handleModoFooter()
          ]}
        >
          <Form visible={this.setmodalVisible} onRef={ref => (this.form = ref)}  usuario={this.props.usuario} modo={this.props.modo} row={this.props.row} editCaso={this.props.editCaso}/>
        </Modal>
      </Row>
      <Row>
      <Modal
          title="Añada una nota antes de proceder:"
          visible={this.state.modal2Visible}
          destroyOnClose
          closable={false}
          onCancel={()=>this.setmodal2Visible(false)}
          footer={[
            this.handleAceptarFooter()
          ]}
          >
        <Input.TextArea rows={4} id="nota"/>
        </Modal>
      </Row>
      <Row>
      <Modal
          title="Añada una nota antes de proceder:"
          visible={this.state.modal3Visible}
          destroyOnClose
          closable={false}
          onCancel={()=>this.setmodal3Visible(false)}
          footer={[
            this.handleRechazarFooter()
          ]}
        >
        <Input.TextArea rows={4} id="nota"/>
        </Modal>
      </Row>
      </div>
    );
  }
}

export default visitaContainer