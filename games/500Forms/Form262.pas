unit Form262;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm262 = class(TW3Form)
  private
    {$I 'Form262:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm262 }

procedure TForm262.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm262.InitializeObject;
begin
  inherited;
  {$I 'Form262:impl'}
end;
 
procedure TForm262.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm262);
end.
