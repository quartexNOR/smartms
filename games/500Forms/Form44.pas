unit Form44;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm44 = class(TW3Form)
  private
    {$I 'Form44:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm44 }

procedure TForm44.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm44.InitializeObject;
begin
  inherited;
  {$I 'Form44:impl'}
end;
 
procedure TForm44.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm44);
end.
