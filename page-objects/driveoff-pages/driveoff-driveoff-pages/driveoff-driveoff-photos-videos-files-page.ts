import { FileChooser, Locator, Page, expect } from "@playwright/test";

export class DriveoffPhotosAndVideospage {
  readonly page: Page;

  readonly driveoffPhotosandVideosSubModule: Locator;
  readonly uploadReceiptButton: Locator;
  readonly chooseFile: Locator;
  readonly uploadButton: Locator;
  readonly uploadPhotosButton: Locator;
  readonly uploadVideosButton: Locator;
  readonly verifyUploadedReceipt: Locator;
  readonly verifyUploadedPhotos: Locator;
  readonly verifyUploadedVideos: Locator;
  readonly clearButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.driveoffPhotosandVideosSubModule = page.locator(
      '//li[normalize-space()="Photos/Videos Files"]'
    );
    this.uploadReceiptButton = page.locator(
      '[data-test-id="DriveOffPhotosVideosFilesCardWithToggleAndFunctionButtonsbtnUploadReceiptsButton"]'
    );
    this.uploadPhotosButton = page.locator(
      '[data-test-id="DriveOffPhotosVideosFilesCardWithToggleAndFunctionButtonsbtnUploadPhotosButton"]'
    );
    this.uploadVideosButton = page.locator(
      '[data-test-id="DriveOffPhotosVideosFilesCardWithToggleAndFunctionButtonsbtnUploadVideosButton"]'
    );
    this.chooseFile = page.locator('[data-test-id="DriveOffPhotosVideosFiles150PopupFileUploadChooseFiles"]');
    this.uploadButton = page.locator('[data-test-id="DriveOffPhotosVideosFiles150PopupFileUploadUpload"]');
    this.clearButton = page.locator('[data-test-id="DriveOffPhotosVideosFiles150PopupFileUploadClear"]');
    this.verifyUploadedReceipt = page.locator(
      '[data-test-id="DriveOffPhotosVideosFiles150UploadFilesFileContentTypeId"]'
    );
    this.verifyUploadedPhotos = page.locator(
      '[data-test-id="DriveOffPhotosVideosFiles150UploadFilesFileContentTypeId"]'
    );
    this.verifyUploadedVideos = page.locator(
      '[data-test-id="DriveOffPhotosVideosFiles150UploadFilesFileContentTypeId"]'
    );
  }
  async clickOnDriveoffPhotosandVideosSubmodule() {
    await this.driveoffPhotosandVideosSubModule.click();
  }
  async clickOnUploadReceiptButton() {
    await this.uploadReceiptButton.click();
  }
  async clickOnUploadPhotosButton() {
    await this.uploadPhotosButton.click();
  }
  async clickOnUploadVideosButton() {
    await this.uploadVideosButton.click();
  }
  async uploadFileDialogBox(File_path: string) {
    await this.page.waitForTimeout(7000);
    await this.chooseFile.setInputFiles(File_path);
    await this.page.waitForTimeout(3000);
    await this.uploadButton.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(15000);
  }
  async uploadFileThroughDialog(file_path: string) {
    async function handleFileChooser(dialog: FileChooser) {
      await dialog.setFiles(file_path);
    }
    this.page.on('filechooser', handleFileChooser);
    await this.chooseFile.click();
    await this.page.waitForLoadState('networkidle');
    await this.uploadButton.click();

  }

  //verify
  async verifyReceiptIsUploadedSuccessfully(
    expectedUploadedReceiptMessage: string
  ) {
    const verifyUploadedReceipt =
      await this.verifyUploadedReceipt.textContent();
    expect(verifyUploadedReceipt).toBe(expectedUploadedReceiptMessage);
  }
  async verifyPhotoIsUploadedSuccessfully(
    expectedUploadedPhotoMessage: string
  ) {
    const verifyUploadedPhoto = await this.verifyUploadedPhotos.textContent();
    expect(verifyUploadedPhoto).toBe(expectedUploadedPhotoMessage);
  }
  async verifyVideoIsUploadedSuccessfully(expectedUploadedVideoMessage: string) {
    const verifyUploadedVideo = await this.verifyUploadedVideos.textContent();
    expect(verifyUploadedVideo).toBe(expectedUploadedVideoMessage);
  }
}
