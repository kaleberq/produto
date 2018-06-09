import { Component, TestabilityRegistry } from '@angular/core';
import { NavController,AlertController, MenuController } from 'ionic-angular';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario:string = "";
  senha:string="";
  senhaCurta:string="";
  texto:string="";
  path:any="";
  arquivo:any="";
  errorTela:any="";
    

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public menuCtrl: MenuController,
              private file: File) {

        this.menuCtrl.enable(false, 'myMenu');
        this.arquivo = 'oioi.txt';
        this.path = file.dataDirectory;
  }

cadastrarSenhaCurta() {
  if(this.senhaCurta){
    this.texto = this.senhaCurta;
    this.file.writeFile(this.path,this.arquivo,this.texto,{replace:true}).then(ok => {
      this.showAlert('senha curta criada com sucesso','Atenção');
      this.navCtrl.setRoot("ProdutoPage");
    }).catch(err => {
      this.errorTela = JSON.stringify(err);
      this.showAlert('erro ao criar a senha', 'Atenção');
    })
  }else{
    this.showAlert('Digite uma senha valida','Atenção');
  }
}

verificarSenhaCurta() {
  this.file.readAsText(this.path,this.arquivo).then(testFromFile => {
    this.texto = testFromFile;
  }).catch(err => {
    this.errorTela = JSON.stringify(err);
    this.showAlert('Senha curta não foi criada', 'Atenção');
  })
}

login(pagina) {
  if(!this.usuario.trim()){
    this.showAlert('Usuario não informado','Atenção')
    return;
  }
  if(!this.senha.trim()){
    this.showAlert('Senha não informada','Atenção')
    return;
  }
  if(this.usuario.trim() != "kalebe"){
    this.showAlert('Usuario errado','Atenção')
    return;
  }
  if(this.senha.trim() != "123"){
    this.showAlert('Senha errada','Atenção')
    return;
  }else{
    if(this.texto){
      this.navCtrl.push("ProdutoPage");
  }else{
    this.texto = "empty"
    this.showAlert('Digite senha curta', 'Atenção');
  }
  }
}


presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Usuario ou senha incorreto',
    subTitle: 'Tente novamente',
    buttons: ['Sair']
  });
  alert.present();
}  

showAlert(mensagem:string, title:string) {
  let alert = this.alertCtrl.create({
    title: title,
    subTitle: mensagem,
    buttons: ['Sair']
  });
  alert.present();
}

ionViewDidLoad(){
 this.verificarSenhaCurta();
}
}