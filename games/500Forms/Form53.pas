unit Form53;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm53 = class(TW3Form)
  private
    {$I 'Form53:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm53 }

procedure TForm53.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm53.InitializeObject;
begin
  inherited;
  {$I 'Form53:impl'}
end;
 
procedure TForm53.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm53);
end.
