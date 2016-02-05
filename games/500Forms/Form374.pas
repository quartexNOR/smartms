unit Form374;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm374 = class(TW3Form)
  private
    {$I 'Form374:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm374 }

procedure TForm374.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm374.InitializeObject;
begin
  inherited;
  {$I 'Form374:impl'}
end;
 
procedure TForm374.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm374);
end.
