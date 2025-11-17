<?php

namespace App\Entity;

use App\Repository\UuidRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UuidRepository::class)]
class Uuid
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?string $id = null;

    public function getId(): ?string
    {
        return $this->id;
    }
}
