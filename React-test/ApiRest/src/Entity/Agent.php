<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: 'App\Repository\AgentRepository')]
class Agent
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 255, unique: true)]
    private ?string $uuid = null;

    #[ORM\Column(type: 'string', length: 255)]
    private ?string $displayName = null;

    #[ORM\Column(type: 'string', length: 100, nullable: true)]
    private ?string $role = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $fullPortrait = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    private ?\DateTimeInterface $releaseDate = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $description = null;

    // 🧩 --- GETTERS & SETTERS ---

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUuid(): ?string
    {
        return $this->uuid;
    }

    public function setUuid(string $uuid): self
    {
        $this->uuid = $uuid;
        return $this;
    }

    public function getDisplayName(): ?string
    {
        return $this->displayName;
    }

    public function setDisplayName(string $displayName): self
    {
        $this->displayName = $displayName;
        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): self
    {
        $this->role = $role;
        return $this;
    }

    public function getFullPortrait(): ?string
    {
        return $this->fullPortrait;
    }

    public function setFullPortrait(?string $fullPortrait): self
    {
        $this->fullPortrait = $fullPortrait;
        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->releaseDate;
    }

    public function setReleaseDate(?\DateTimeInterface $releaseDate): self
    {
        $this->releaseDate = $releaseDate;
        return $this;
    }
    public function getDescription(): ?string{
        return $this->description;
    }
    public function setDescription(string $description): self
    {
        $this->description = $description;
        return $this;
    }
}
