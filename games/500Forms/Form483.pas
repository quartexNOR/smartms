unit Form483;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm483 = class(TW3Form)
  private
    {$I 'Form483:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm483 }

procedure TForm483.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm483.InitializeObject;
begin
  inherited;
  {$I 'Form483:impl'}
end;
 
procedure TForm483.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm483);
end.
