unit Form454;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm454 = class(TW3Form)
  private
    {$I 'Form454:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm454 }

procedure TForm454.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm454.InitializeObject;
begin
  inherited;
  {$I 'Form454:impl'}
end;
 
procedure TForm454.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm454);
end.
