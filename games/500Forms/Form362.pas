unit Form362;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm362 = class(TW3Form)
  private
    {$I 'Form362:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm362 }

procedure TForm362.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm362.InitializeObject;
begin
  inherited;
  {$I 'Form362:impl'}
end;
 
procedure TForm362.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm362);
end.
